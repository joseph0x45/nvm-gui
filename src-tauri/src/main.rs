#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
use std::process::Command;
use tauri::SystemTray;

#[tauri::command]
fn execute_command(command: &str) -> String {
  let output = Command::new(command)
    .arg("list")
    .arg("")
    .output()
    .expect("failed to execute process");
  return String::from_utf8_lossy(&output.stdout).to_string();
}

#[tauri::command]
fn get_node_version() -> String {
  let output = Command::new("node")
    .arg("--version")
    .output()
    .expect("failed to execute process");
  return String::from_utf8_lossy(&output.stdout).to_string();
}

#[tauri::command]
fn change_version()-> String {
  let output = Command::new("nvm")
    .arg("use")
    .arg("16.16.0")
    .output()
    .expect("failed to execute process");
  return String::from_utf8_lossy(&output.stdout).to_string();
}

fn main() {
  let tray = SystemTray::new();

  tauri::Builder::default()
    .setup(|app| {
      match app.get_cli_matches() {
        // `matches` here is a Struct with { args, subcommand }.
        // `args` is `HashMap<String, ArgData>` where `ArgData` is a struct with { value, occurances }.
        // `subcommand` is `Option<Box<SubcommandMatches>>` where `SubcommandMatches` is a struct with { name, matches }.
        Ok(matches) => {
          println!("{:?}", matches)
        }
        Err(_) => {}
      }
      Ok(())
    })
    .system_tray(tray)
    .invoke_handler(tauri::generate_handler![execute_command, get_node_version, change_version])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

