#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
use std::process::Command;
use tauri::SystemTray;

#[tauri::command]
fn get_all_versions() -> String {
  let output = Command::new("nvm")
    .arg("list")
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
fn change_version(version: &str)-> String {
  let output = Command::new("nvm")
    .arg("use")
    .arg(version)
    .output()
    .expect("failed to execute process");
  return String::from_utf8_lossy(&output.stdout).to_string();
}

fn main() {
  let tray = SystemTray::new();

  tauri::Builder::default()
    .system_tray(tray)
    .invoke_handler(tauri::generate_handler![get_all_versions, get_node_version, change_version])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

