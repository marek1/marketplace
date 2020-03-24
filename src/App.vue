<template>
  <div id="app">
    <div class="ribbon_holder" >
      <div class="ribbon_wraps" >
        <div class="ribbon_wrapLt"></div>
        <div class="ribbon_wrapRt"></div>
        <div class="ribbon_banner">
          Prototype
        </div>
      </div>
    </div>
    <div id="top-bar">
      &checkmark; Nachhaltig konsumieren
      &checkmark; Geschäfte in deiner Nähe unterstützen
    </div>
    <div id="nav">
      <router-link to="/">Produkte</router-link>
      |
      <router-link to="/shops">Läden</router-link>
    </div>
    <router-view/>
    <div class="footer">
      &copy; 2020 Marek Sonnabend - Dies ist ein Prototype.
    </div>
  </div>
  
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  a, .clickable {
    cursor: pointer;
  }
  
  #top-bar {
    background-color: #42b983;
    color: white;
    opacity: 0.75;
  }
  
  #nav {
    padding: 30px;
    font-size: 150%;
  }
  
  #nav a {
    font-weight: bold;
    color: #b3bbc3;
    text-decoration: underline;
  }
  
  #nav a.router-link-exact-active {
    color: #42b983;
  }
  
  .small-logo {
    max-width: 100px;
  }
  
  .wrapper {
    margin-left: auto;
    margin-right: auto;
    padding-right: 1.5em;
    padding-left: 1.5em;
    max-width: 1080px;
  }
  
  .masonry {
    margin: 30px auto;
    -webkit-column-count: 1;
    -webkit-column-gap: 0;
    -moz-column-count: 1;
    -moz-column-gap: 0;
    column-count: 1;
    column-gap: 0;
  }
  
  .no-csscolumns .masonry {
    max-width: 500px;
  }
  
  .brick {
    background: white;
    padding: 1em;
    margin: 0 1em 2em 1em;
    border: 1px solid #ccc;
    border-bottom-width: 3px;
    display: inline-block;
    -webkit-column-break-inside: avoid;
    -moz-column-break-inside: avoid;
    column-break-inside: avoid;
    max-width: 300px;
    position: relative;
  }
  
  .brick img {
    max-width: 100%;
  }
  
  @media screen and (min-width: 650px) {
    .masonry {
      -webkit-column-count: 2;
      -moz-column-count: 2;
      column-count: 2;
    }
  }
  
  @media screen and (min-width: 960px) {
    .masonry {
      -webkit-column-count: 3;
      -moz-column-count: 3;
      column-count: 3;
    }
  }
  
  @media screen and (min-width: 1200px) {
    .masonry {
      -webkit-column-count: 4;
      -moz-column-count: 4;
      column-count: 4;
      max-width: 1460px;
    }
  }
  
  .badge {
    background-color: #b3bbc3;
    color: white;
    display: inline-block;
    padding: .25em .4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25rem;
  }

  .badge.green {
    background-color: #42b983;
    opacity: 0.5;
  }
  
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 5px;
    background: #d0d0d0;
    width: 100%;
  }

  .ribbon_wrapLt,
  .ribbon_wrapRt,
  .ribbon_banner,
  .ribbon_wraps	{ position:absolute; }

  .ribbon_banner	{
    -webkit-box-shadow:0px 3px 5px rgba(0,0,0,.5);
    -moz-box-shadow:0px 3px 5px rgba(0,0,0,.5);
    box-shadow:0px 3px 5px rgba(0,0,0,.5);
  }
  .ribbon_wraps	{
    -webkit-transform-origin:100% 50%;
    -moz-transform-origin:100% 50%;
    -ms-transform-origin:100% 50%;
    -o-transform-origin:100% 50%;
    transform-origin:100% 50%;
  }
  .ribbon_wrapLt,
  .ribbon_wrapRt	{
    -webkit-transform-origin:50% 100%;
    -moz-transform-origin:50% 100%;
    -ms-transform-origin:50% 100%;
    -o-transform-origin:50% 100%;
    transform-origin:50% 100%;
  }

  .ribbon_wraps	{
    -webkit-transform:rotate(-45deg);
    -moz-transform:rotate(-45deg);
    -ms-transform:rotate(-45deg);
    -o-transform:rotate(-45deg);
    transform:rotate(-45deg);
  }
  .ribbon_wrapLt	{
    -webkit-transform:rotate(135deg);
    -moz-transform:rotate(135deg);
    -ms-transform:rotate(135deg);
    -o-transform:rotate(135deg);
    transform:rotate(135deg);
  }
  .ribbon_wrapRt	{
    -webkit-transform:rotate(225deg);
    -moz-transform:rotate(225deg);
    -ms-transform:rotate(225deg);
    -o-transform:rotate(225deg);
    transform:rotate(225deg);
  }
  .ribbon_holder { /*as overlay*/ position:absolute; left:-6px; top:-6px;
    width:150px; height:150px; overflow:hidden; background:transparent; }
  .ribbon_holder { /*with image*/ position: absolute; left: -6px; top: -6px;
    width:300px; height:375px; overflow:hidden; z-index:9999}
  .ribbon_wraps  { width:204px; height:48px; left:-60px; top:-24px; overflow:hidden; }
  .ribbon_wrapLt { width:30px; height: 6px;  left:-15px; bottom:50%; background:#622; }
  .ribbon_wrapRt { width:30px; height: 6px; right:-15px; bottom:50%; background:#622; }
  .ribbon_banner { width:204px; height:24px; right:0px; top:0px; line-height:24px;
    text-align:center; font-weight:bold; font-family:arial;
    font-size:16px; color:#fff; background:#c00; }
  
</style>
