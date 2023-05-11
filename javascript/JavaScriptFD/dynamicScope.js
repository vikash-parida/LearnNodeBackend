// let obj = {
//     name: 'test',
//     sayHii : function (){
//         console.log('a',this);
//         let hello = function (){
//             console.log('b',this);
//         }
//        hello();
//     }
// }

// obj.sayHii()

// let obj = {
//         name: 'test',
//         sayHii : function (){
//             console.log('a',this);
//             let hello = ()=> {
//                 console.log('b',this);
//             }
//            hello();
//         }
//     }
    
//     obj.sayHii();


// before es6 use to prevent this error bind and declare inside a variable accessing this 

// let obj = {
//         name: 'test',
//         sayHii : function (){
//             console.log('a',this);
//             let hello = function (){
//                 console.log('b',this);
//             }
//            return hello.bind(this);
//         }
//     }
    
//     obj.sayHii()()


// let obj = {
//             name: 'test',
//             sayHii : function (){
//                 console.log('a',this);
//                 let data = this
//                 let hello = function (){
//                     console.log('b',data);
//                 }
//                hello();
//             }
//         }
        
//         obj.sayHii()