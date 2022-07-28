#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
use std::process::Command;
use tauri::SystemTray;

#[tauri::command]
fn execute_command(command: &str) -> String {
  let output = Command::new(command)
    .arg("use")
    .arg("16.16.0")
    .output()
    .expect("failed to execute process");
  return String::from_utf8_lossy(&output.stdout).to_string();
}

fn main() {
  let tray = SystemTray::new();

  tauri::Builder::default()
    .system_tray(tray)
    .invoke_handler(tauri::generate_handler![execute_command])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

