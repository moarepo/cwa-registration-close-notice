export const page_indcator_animation = {
    initial: {
        y:50,
        opacity:0
    },
    animate: {
        y: 0,
        opacity:1
    },
    transition: {
       type:'spring',
       stiffness:75,
       damping: 15
    },
    exist:{
        y:50,
        opacity:0
    }
}

export const button_animation_normal = {
    initial:{
        scale:1
    },
    hover:{ 
        scale: 1.02,
    },
    pressed:{ 
        scale: 0.8
    },
    transition:{
        duration: 0.2,
        ease: 'easeInOut'
    }
}