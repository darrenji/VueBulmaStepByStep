<template>
    <xcontent :classname="'bg-light'">
        <span slot="title">Forms</span>
        <div class="tile is-ancestor">
            <div class="tile is-parent is-4">
                <article class="tile is-child box">
                   <label for="" class="label">name</label>
                   <p class="control">
                       <input type="text" class="input">
                   </p>
                    <label for="">username</label>
                    <p class="control has-icon has-icon-right">
                        <input type="text" class="input is-success">
                        <i class="fa fa-check"></i>
                        <span class="help is-success">the username is available</span>
                    </p>
                    <label for="" class="label">Email</label>
                    <p class="control has-icon has-icon-right">
                        <input type="text" class="input is-danger">
                        <i class="fa fa-warning"></i>
                        <span class="help is-danger">the email is invalid</span>
                    </p>
                    <label for="" class="label">Subject</label>
                    <p class="control">
                        <span class="select">
                            <select name="" id="">
                                <option value="">Select dropdown</option>
                                <option value="">with options</option>
                            </select>
                        </span>
                    </p>
                    <label for="" class="label">Message</label>
                    <p class="control">
                        <textarea name="" id="" cols="30" rows="10" class="textarea"></textarea>
                    </p>
                    <p class="control">
                        <label for="" class="checkbox">
                           <input type="checkbox">
                            Remember me
                        </label>
                    </p>
                    <p class="control">
                        <label class="radio">
                           <input type="radio" name="question">
                            Yes
                        </label>
                        <label class="radio">
                           <input type="radio" name="question">
                            No
                        </label>
                    </p>
                    <p class="control">
                        <button class="button is-primary">Submit</button>
                        <button class="button is-link">Cancel</button>
                    </p>
                </article>
            </div>
            
            <div class="tile is-parent is-4">
                <article class="tile is-child box">
                    <h3 class="title">Colors</h3>
                    <p class="control">
                        <input type="text" class="input is-primary">
                    </p>
                    <p class="control">
                        <input type="text" class="input is-info">
                    </p>
                    <p class="control">
                        <input type="text" class="input is-success">
                    </p>
                    <p class="control">
                        <input type="text" class="input is-warning">
                    </p>
                    <p class="control">
                        <input type="text" class="input is-danger">
                    </p>
                </article>
            </div>
            
            <div class="tile is-parent is-4">
                <article class="tile is-child box">
                    <h3 class="title">Sizes</h3>
                    <p class="control">
                        <input type="text" class="input is-small" placeholder="small">
                    </p>
                    <p class="control">
                        <input type="text" class="input">
                    </p>
                    <p class="control">
                        <input type="text" class="input is-medium" placeholder="medium">
                    </p>
                    <p class="control">
                        <input type="text" placeholder="large" class="input is-large">
                    </p>
                    <p class="control">
                        <span class="select is-small">
                            <select name="" id="">
                                <option value="">Select</option>
                                <option value="">With options</option>
                            </select>
                        </span>
                    </p>
                    
                </article>
            </div>
        </div>
        
        <div class="tile is-ancestor">
            <div class="tile is-parent is-4">
                <article class="tile is-child box">
                    <h3 class="title">States</h3>
                    <p class="control is-loading">
                        <input type="text" class="input">
                    </p>
                    <p class="control is-loading">
                        <textarea name="" id="" cols="30" rows="10" class="textarea"></textarea>
                    </p>
                    
                    <p class="control">
                        <label for="" class="checkbox is-disabled">
                            <input type="checkbox" disabled>
                            Remember me
                        </label>
                    </p>
                    <p class="control">
                        <label for="" class="radio is-disabled">
                            <input type="radio" name="question" disabled> Yes
                        </label>
                        <label for="" class="radio is-disabled">
                            <input type="radio" name="question" disabled> No
                        </label>
                    </p>
                    <p class="control">
                        <button class="button is-primary" disabled>submit</button>
                        <button class="button" disabled>Cancel</button>
                    </p>
                </article>
            </div>
            
            <div class="tile is-parent is-4">
                <article class="tile is-child box">
                   <h3 class="title">带图标</h3>
                    <p class="control has-icon">
                        <input type="email" class="input">
                        <i class="fa fa-envelope"></i>
                    </p>
                    <p class="control has-icon">
                        <input type="password" class="input">
                        <i class="fa fa-lock"></i>
                    </p>
                    <p class="control">
                        <button class="button is-success">登录</button>
                    </p>
                </article>
            </div>
            
            <div class="tile is-parent is-4">
                <article class="tile is-child box">
                    <h3>addons</h3>
                    <p class="control has-addons">
                        <input type="text" class="input">
                        <a href="" class="button is-info">Search</a>
                    </p>
                    <p class="control has-addons">
                        <span class="select">
                            <select name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </span>
                        <input type="text" class="input is-expanded">
                        <a href="" class="button">go</a>
                    </p>
                    <p class="control has-addons has-addons-centered">
                        <span class="select">
                            <select name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </span>
                        <input type="text" class="input is-expanded">
                        <a href="" class="button">go</a>
                    </p>
                    <p class="control has-addons has-addons-right">
                        <span class="select">
                            <select name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </span>
                        <input type="text" class="input is-expanded">
                        <a href="" class="button">go</a>
                    </p>
                </article>
            </div>
        </div>
        
        <div class="tile is-ancestor">
            <div class="tile is-parent is-4">
                <article class="tile is-child box">
                    <h2 class="title">Form group</h2>
                    <div class="control is-grouped">
                        <p class="control is-expanded">
                            <input type="text" class="input">
                        </p>
                        <p class="control">
                            <a href="" class="button is-info">go</a>
                        </p>
                    </div>
                </article>
            </div>
            <div class="tile is-parent is-8">
                <article class="tile is-child box">
                    <div class="control is-horizontal">
                      <div class="control-label">
                        <label class="label">From</label>
                      </div>
                      <div class="control is-grouped">
                        <p class="control is-expanded">
                          <input class="input" type="text" placeholder="Name">
                        </p>
                        <p class="control is-expanded">
                          <input class="input" type="email" placeholder="Email">
                        </p>
                      </div>
                    </div>
                    <div class="control is-horizontal">
                      <div class="control-label">
                        <label class="label">Subject</label>
                      </div>
                      <div class="control">
                        <div class="select is-fullwidth">
                          <select>
                            <option>General enquiry</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="control is-horizontal">
                      <div class="control-label">
                        <label class="label">Question</label>
                      </div>
                      <div class="control">
                        <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
                      </div>
                    </div>
                </article>
            </div>
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

