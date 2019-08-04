var btn_save = document.getElementById('btn-save');
var btn_clear = document.getElementById('btn-clear');
var div_notes = document.getElementById('notes');
var key_local_storage = "quick-notes";
var saved_text = localStorage.getItem(key_local_storage);

div_notes.innerHTML = saved_text;

btn_save.onclick = function() {
  localStorage.setItem(
    key_local_storage,
    div_notes.innerHTML);
  return false;
};

btn_clear.onclick = function() {
  div_notes.innerHTML = "";
  return false;
};
