document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("list").addEventListener("submit",(e)=>{
    e.preventDefault()
    tasklisting(e.target["new-task-description"].value)
  })
});

function taskListing(text) {
  let list =document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click',delFunc)
  btn.textContent='X'
  list.textContent=`${text}`
  list.appendChild(btn)
  document.querySelector("#tasks").appendChild(list)

}
function delFunc(e) {
  e.target.parentnode.remove()
}