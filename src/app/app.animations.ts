import { animate, 
         animation,
         //group,
         //keyframes,
         state, 
         style, 
         transition, 
         trigger,
         useAnimation } from '@angular/animations';


export const fadeInAnimation = animation([
    style({ opacity: 0 }),

    animate(100, style({ opacity: 1 }))
]);

export const fadeOutAnimation = animation([
    style({ opacity: 1 }),

    animate(200, style({ opacity: 0 }))
]);

export const scaleDownAnimation = animation([
    style('*'),

    animate(200, style({ transform: 'scale(.8)' }))
]);

export const scaleUpAnimation = animation([
    style('*'),

    animate(200, style({ transform: 'scale(1)' }))
])

export const fadeIn = trigger('fadeIn', [
    state('void', style({ opacity: 0 })),

    transition(':enter', useAnimation(fadeInAnimation))
]);

export const fadeOut = trigger('fadeOut', [
    state('void', style({ opacity: 0 })),

    transition(':leave', useAnimation(fadeOutAnimation))
]);

export const fade = trigger('fade', [
    state('void', style({ opacity: 0 })),

    transition(':enter', useAnimation(fadeInAnimation)),
    transition(':leave', useAnimation(fadeOutAnimation))
]);

export const slideFabs = trigger('slideFabs', [
    state('in', style('*')),
    state('out', style('*')),
    
    transition(':enter', useAnimation(fadeInAnimation)),
    transition('* <=> *', animate('500ms ease-in-out')),
    transition(':leave', useAnimation(fadeOutAnimation))
]);

export const slideFromLeft = trigger('slideFromLeft', [
    state('out', style('*')),
    state('in', style({ transform: 'translateX(50px)' })),
    
    transition('* <=> *', animate(200))
]);

export const slideFromRight = trigger('slideFromRight', [
    state('out', style('*')),
    state('in', style({ transform: 'translateX(-50px)' })),
    
    transition('* <=> *', animate(200))
]);

export const scale = trigger('scale', [
    state('large', style('*')),
    state('small', style({ transform : 'scale(.85)' })),
    
    transition(':enter', useAnimation(fadeInAnimation)),
    transition('* <=> *', animate(200)),
    transition(':leave', useAnimation(fadeOutAnimation))
]);