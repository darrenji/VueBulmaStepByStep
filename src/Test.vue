       
       <aside class="menu">
           <div class="menu-container" v-for="(items, x) in menus">
              <!--这里显示第一级菜单-->
               <p class="menu-label">
                   <span class="icon is-small">
                       <i :class="'fa fa-'+items.icon"></i>
                   </span>
                   <span v-text="items.title"></span>
               </p>
               <ul class="menu-list">
                   <li v-for="(item, y) in items.sub">
                      <!--这里显示第二级菜单,不存在子菜单的情况-->
                       <router-link v-if="!item.sub" : to="item.url">
                           <span class="icon is-small">
                               <i :class="'fa fa-'+item.icon"></i>
                           </span>
                           <span v-text="item.title"></span>
                       </router-link>
                       <!--这里显示第二级菜单,存在子菜单的情况-->
                       <!--起初index='',这时候menu-toggle不会出现；当点击的时候，index=(x,y),menu-toggle就会出现；当再次点击的时候index='',menu-toggle就又不出现了。这最终形成了菜单的打开和关闭-->
                       <a v-if="!!item.sub" :class="{'menu-toggle':(x+'.'+y)===index}" @click="toggle(x+'.'+y)">
                           <span class="icon is-small">
                               <i :class="'fa fa-'+item.icon"></i>
                           </span>
                           <span v-text="item.title"></span>
                           <span class="icon is-small is-angle">
                                <i class="fa fa-angle-down"></i>
                           </span>
                       </a>
                       <!--这里显示第三级菜单-->
                       <div v-if="!!item.sub" class="menu-subcontainer" :style="{height: (x+'.'+y)===index ? (item.sub.length * 30 + 10) + 'px':'0'}">
                           <ul>
                               <li v-for="sub in item.sub">
                                   <router-link to="sub.url">
                                       <span class="icon is-small">
                                           <i :class="'fa fa-'+(sub.icon?sub.icon:'caret-right')"></i>
                                       </span>
                                       <span v-text="sub.title"></span>
                                   </router-link>
                               </li>
                           </ul>
                       </div>
                   </li>
               </ul>
           </div>
       </aside>