extern crate embed_resource;

fn main() {
  embed_ressource::compile("nvmgui-manifest.rc")
  tauri_build::build()
}
