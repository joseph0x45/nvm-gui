#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
use std::process::Command;

fn main() {
  tauri::Builder::default()
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}


fn executeCommand(command: &str) -> String {
  let output = Command::new(command)
    .output()
    .expect("failed to execute process");
  return String::from_utf8_lossy(&output.stdout).to_string();
}