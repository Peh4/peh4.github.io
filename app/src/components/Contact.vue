<template>
  
  <div class="contact">
   
    <MyHeader></MyHeader>
    
    <section id="main">
      <div class="content">
        
        

          
            <transition name="slideTop" appear>
              
              <div class="grid-4 ">

                <div class="pbl push one-third">
                  <h2>Contact</h2>
                  
                  <p>
                    <i class="fa fa-envelope prs" aria-hidden="true"></i>
                    <a href="mailto:pierrealainleboucher+website@gmail.com">pierrealainleboucher@gmail.com</a>
                  </p>
                  <p>
                    <i class="fa fa-phone prs" aria-hidden="true"></i>
                    <a href="tel:33686684346">+33 6 86 68 43 46</a>
                  </p>
                  <p>  
                    <i class="fa fa-github prs" aria-hidden="true"></i>
                    <a target="_blank" href="https://github.com/Peh4">GitHub</a>
                  </p>
                  <p>
                    <i class="fa fa-linkedin-square prs" aria-hidden="true"></i>
                    <a target="_blank" href="https://www.linkedin.com/in/pierre-alain-leboucher-40294239/">Linkedin</a>
                  </p>

                </div>
                <div></div>
                <div></div>
                
              </div>
            </transition>
          
      </div>

    </section>
    
    <MyFooter></MyFooter>
    
  </div>
  
</template>

<script>
import MyHeader from './MyHeader.vue'
import MyFooter from './MyFooter.vue'

export default {
  name: 'Contact',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

