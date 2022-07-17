const img1:Element|null = document.getElementById("first")
const img2:Element|null = document.getElementById("second")
const img3:Element|null = document.getElementById("third")

const keyframes: Keyframe = {
    transform: "translateX(-2em)"
}

const options: KeyframeAnimationOptions = {
    duration: 100,
    iterations: 5,
    direction:"alternate-reverse"
}


const Animations = async (): Promise<void> => {

    let anim1: Animation = img1.animate(keyframes, options)

    let fin_anim_1: Animation = await anim1.finished

    let anim2: Animation = img2.animate(keyframes, options)

    let fin_anim_2 : Animation = await anim2.finished

    let anim3 : Animation = img3.animate(keyframes, options)

    let fin_anim_3 : Animation = await anim3.finished

}

Animations()