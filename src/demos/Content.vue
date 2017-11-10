<template>
    <xcontent :classname="'bg-light'">
        <span slot="title">Content</span>
        <div class="content">
            <h1>hello world</h1>
            <p>Lorem ipsumsup <sup><a>1</a></sup> dolor sit amet, consectetur adipisicing elit. Ducimus veritatis aliquid esse velit dicta voluptates sunt recusandae vitae aspernatur, quisquam iusto quidem laboriosam. Ipsum, qui vero minima maxime! Quibusdam, accusamus.</p>
            <p>Lorem ipsum dolor sit amet, <strong>consectetur adipisicing elit.</strong>  Est, deserunt.</p>
            <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur.</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, <a href="#">consectetur adipisicing</a> elit. Vitae, voluptatibus!</p>
            <ol>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, architecto?</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste.</li>
            </ol>
            <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ipsam porro exercitationem. Aperiam aliquid eos recusandae a doloribus. Atque, dolore.
            </blockquote>
            <dl>
                <dt>web</dt>
                <dd>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam earum harum sapiente.</dd>
                <dt>HTML</dt>
                <dd>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</dd>
                <dt>css</dt>
                <dd>Lorem ipsum dolor sit amet, consectetur adipisicing.</dd>
            </dl>
            <pre>
                function sayHello(msg) {
                    console.log('hi ' + msg);
                }
            </pre>
            <table>
                <thead>
                    <tr>
                        <th>one</th>
                        <th>two</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>three</td>
                        <td>four</td>
                    </tr>
                    <tr>
                        <td>four</td>
                        <td>five</td>
                    </tr>
                </tbody>
            </table>
            <figure>
                <img src="http://placehold.it/256x256" alt="">
            </figure>
        </div>
    </xcontent>
</template>


<script>
    import { Xcontent } from '../components/page'
    export default {
        components: {
            Xcontent
        }
    }
</script>