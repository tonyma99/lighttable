<style>
  @font-face {
    font-family: 'Blender Pro';
    src: local('Blender Pro Medium'), local('Blender-Pro-Medium'),
        url('/fonts/blender/BlenderPro-Medium.woff2') format('woff2'),
        url('/fonts/blender/BlenderPro-Medium.woff') format('woff'),
        url('/fonts/blender/BlenderPro-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  
  div {
    font-family: 'Blender Pro', sans-serif;
  }
</style>

<div>
  <slot />
</div>