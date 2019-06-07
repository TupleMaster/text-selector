// Highlighted text is sent to the console.log

<script>
document.addEventListener('click', function(event)
{
  if (event.detail === 1)  {
    var sel = window.getSelection().toString();
    arr = []
    arr.push(sel);
  for (var i = 0; i < arr.length; i++)
  {
    console.log(arr[i])
}
}
})
</script>
