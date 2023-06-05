# Pages
## LaptopPage
Loads if the user is on a laptop. This page is the main page of the application. 
It contains the QR Code to be scanned by the mobile device

## Router
Mobile view entry point. This is the router of the mobile application.

## SelectionPage (Mobile default page)
This page is the default page of the mobile application. 
It contains the list of available ar scenes to be selected by the user.
```js
window.location.hash = "#/";
```

## ARScenePage
This page is the page that loads any AR scene.

## LanternsScene 
```js
window.location.hash = "#/lanterns";
```
This is the AR scene that loads the lanterns.
The `LanternARScene` component is passed to the `ARScenePage` component as a slot.
```vue
<ARScenePage>
    <LanternARScene slot="scene"/>
</ARScenePage>
```
**Note:** The slot name must be "scene" for the `ARScenePage` to load the scene.

## MinhintaleScene
```js
window.location.hash = "#/minhintale";
```
Similar to the `LanternsScene`, this is the AR scene that loads the Minhintale.