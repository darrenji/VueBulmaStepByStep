<template>
   <section class="menu">
       <div>navmenu</div>
   </section>
    
</template>


<style lang="less">
#menu-toggle-switch{
  position:absolute;
  top:0;
  background-color:rgba(0,0,0,0.5);
  color:#ccc;
  padding:0 3px;
  right:-18px;
  z-index:-1;
}
section.menu {
  position:absolute;
  left:0;
  top:0;
  width:220px;
  bottom:0;
  background-color:#fafafa;
  box-shadow:1px 0 1px rgba(0,0,0,0.2);
  display:flex;
  flex-direction:column;
  z-index:10;
}
aside.menu{
  display:flex;
  flex-basis:auto;
  flex-direction:column;
  flex-grow:1;
  flex-shrink:1;
  padding:10px;
  overflow-x:hidden;
  overflow-y:auto;
}
section.menu .panel-block{
  display:block;
  flex-basis:auto;
  flex-direction:column;
  flex-grow:0;
  flex-shrink:0;
  line-height:20px;
  background-color:#eee;
  border-radius:0;
  box-shadow: 0 -1px 0 rgba(0,0,0,0.12);
  border-bottom:none;
}
section.menu .panel-block:first-child{
  box-shadow: 0 1px 0 rgba(0,0,0,0.12);
}
aside.menu .menu-container {
  margin-bottom:20px;
}
aside.menu .menu-label {
  font-weight:700;
}
aside.menu .menu-label .icon{
  vertical-align: bottom;
  margin-right:6px;
}
aside.menu a {
  position:relative;
  line-height:20px;
}
aside.menu li ul {
  margin: 5px 0 5px 18px;
}
aside.menu .menu-subcontainer {
  overflow: hidden;
  transition: all .3s;
}
section.menu a .icon {
  vertical-align: baseline;
  margin-right:5px;
}
aside.menu .icon.is-angle {
  position: absolute;
  margin-right:0;
  right: 10px;
  transition: transform .3s ease;
}
aside.menu .menu-toggle .icon.is-angle {
  transform: rotate(180deg);
}
</style>