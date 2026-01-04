import test from '@playwright/test'

//41.664276, -111.488435


test.use({
    geolocation:{
        latitude:41.664276,
        longitude:-111.488435

    },
    permissions:['geolocation']
})

test("GeoLocation",async({page})=>{

    await page.goto("https://maps.google.com/")
    await page.click("#sVuEFc")

    await page.waitForTimeout(25000)
})