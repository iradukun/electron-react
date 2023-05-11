const { ipcMain } = require('electron')
const fs = require('fs')
const puppeteer = require('puppeteer')

ipcMain.on('start-task', async (event, { profilesFile, commentsFile, postId }) => {
  const profiles = fs.readFileSync(profilesFile, 'utf8').split('\n')
  const comments = fs.readFileSync(commentsFile, 'utf8').split('\n')

  const browser = await puppeteer.launch({ headless: false })

  for (const profile of profiles) {
    const [username, password, proxy, cookies] = profile.split(',')
    const page = await browser.newPage()
    await page.setExtraHTTPHeaders({ 'Proxy-Authorization': `Basic ${Buffer.from(proxy).toString('base64')}` })
    await page.setCookie(...JSON.parse(cookies))

    await page.goto(`https://www.facebook.com/${postId}`)

    // Like the post
    await page.click('[aria-label="Like"]')

    // Write a comment
    const comment = comments[Math.floor(Math.random() * comments.length)]
    await page.click('[data-text="true"]')
    await page.keyboard.type(comment)
    await page.keyboard.press('Enter')

    // Like all comments
    await page.evaluate(() => {
      const likeButtons = document.querySelectorAll('[aria-label="Like"]')
      likeButtons.forEach(button => button.click())
    })

    await page.close()
  }

  await browser.close()

  event.reply('task-completed')
})
