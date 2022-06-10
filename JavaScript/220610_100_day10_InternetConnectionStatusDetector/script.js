const image = document.getElementById('image')
const statusDisplay = document.getElementById('status')
const mainEl = document.getElementById('main')
const loadingEl = document.querySelector('.lds-spinner')
function setColor() {
  mainEl.classList.add('online')
}

async function connectionStatus() {
  try {
    // loading()
    const fetchResult = await fetch(
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=' + new Date().getTime()
    )
    image.src = './images/online.png'
    setColor()
    return fetchResult.status >= 200 && fetchResult.status < 300
  } catch (error) {
    console.error(error)
    statusDisplay.textContent = 'OOPS!!! Your Internet Connection is Down.'
    // statusDisplay.innerHTML = 'OOPS!!! Your Internet Connection is Down.'
    image.src = './images/offline.png'
    mainEl.classList.remove('online')
  }
}

// Monitor the connection
setInterval(async () => {
  const result = await connectionStatus()
  if (result) {
    loading(true)
    // statusDisplay.textContent = "You're ONLINE!!! Connection looks good."
    statusDisplay.innerHTML = "You're ONLINE!!! Connection looks good."
    setColor()
  } else {
    loading(false)
  }
}, 5000)

//   Check Connection When Page Loads
window.addEventListener('load', async (event) => {
  if (connectionStatus()) {
    statusDisplay.textContent = 'Online'
  } else {
    statusDisplay.textContent = 'OFFline'
  }
})

//
function loading(isLoading) {
  if (isLoading) {
    loadingEl.style.display = 'none'
  } else {
    loadingEl.style.display = 'block'
  }
}