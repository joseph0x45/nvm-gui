extern crate embed_ressource;

fn main() {
  embed_ressource::compile("nvmgui-manifest.rc")
  tauri_build::build()
}
