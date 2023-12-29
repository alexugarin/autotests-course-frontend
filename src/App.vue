<template>
    <div>hello world</div>
    <form @submit.prevent>
    <input-number
        class="i1"
        v-model="number1"
        @keypressemit="validateNumber1"
    />

    <select class="operator" v-model="operator" required>
        <option disabled value=''>Выберите оператор</option>
        <option>-</option>
        <option>/</option>
        <option>+</option>
        <option>*</option>
    </select>

    <input-number

        class="i2"
        v-model="number2"
        @keypressemit="validateNumber2"
    />

    <select class="radix" v-model="radix" requiered>
        <option disabled value=''>Выберите систему счисления</option>
        <option>2</option>
        <option>8</option>
        <option selected>10</option>
        <option>16</option>
    </select>
    <button class="resultBtn" @click="calculate">Ок</button>
    </form>
    <div class="resultCalc" style="color:black">{{ result }}</div>
</template>

<style>

</style>

<script>
import InputNumber from '@/components/InputNumber.vue'
import axios from 'axios'

export default {
    data() {
        return {
            number1: '',
            operator:'',
            number2: '',
            radix:'10',
            result:''
        }
    },
    watch:{
        result(value){
            this.result= (+value).toFixed(2);
        }
    },
    components: {
        InputNumber
    },
    methods:{
        async calculate(){
            console.log('calculate')
            const response = await axios
            .get(`http://localhost:1212/api/calculate?a=${this.number1}&b=${this.number2}&numberSystem=${this.radix}&operation=${encodeURIComponent(this.operator)}`)
            
            this.result = response.data;
            this.changeColorResult(this.result)
            console.log('result: '+response.data)
            
        },
        changeColorResult(result){
            if (result<0) document.querySelector('.resultCalc').style.color="red"
            else if (result>0){
                
                document.querySelector('.resultCalc').style.color="green"}
            else document.querySelector('.resultCalc').style.color="black"
        },
        validateNumber1(number){
            let radix = this.radix;
            switch(radix){
                case '10': this.validateNumber(number);break;
                case '2': this.validateNumberBinary(number);break;
                case '8': this.validateNumberOctal(number);break;
                case '16': this.validateNumberHex(number);break;
                default:this.validateNumber(number);
            }
            
        },
        validateNumber2(number){
            let radix = this.radix;
            switch (radix) {
                case '10': {
                    if (this.operator == '/') {
                        this.validateNumberOperatorDiv(number);
                        console.log(window.event);
                        console.log('operator  div')
                    }
                    else {
                        this.validateNumber(number);
                        console.log('operator not a div')
                    }
                }break;
                case '2': this.validateNumberBinary(number);break;
                case '8': this.validateNumberOctal(number);break;
                case '16': this.validateNumberHex(number);break;
                default:this.validateNumber(number);
            }
            
        },
        validateNumberBinary(number){
            this.number=number;
            var theEvent = window.event;
            
            let key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode( key );
            
            var regex = /[0-1]|\-/;
            if( !regex.test(key) ) {
                theEvent.returnValue = false;
                if(theEvent.preventDefault) theEvent.preventDefault();
            }
            if (/\-/.test(key)) {
                console.log((this.number.toString()))
                if ((this.number.toString()).length > 0) {
                    theEvent.returnValue = false;
                    if (theEvent.preventDefault) theEvent.preventDefault();
                }
            }
        },
        validateNumberOctal(number){
            this.number=number;
            var theEvent = window.event;
            
            let key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode( key );
            
            var regex = /[0-7]|\-/;
            if( !regex.test(key) ) {
                theEvent.returnValue = false;
                if(theEvent.preventDefault) theEvent.preventDefault();
            }
            if (/\-/.test(key)) {
                console.log((this.number.toString()))
                if ((this.number.toString()).length > 0) {
                    theEvent.returnValue = false;
                    if (theEvent.preventDefault) theEvent.preventDefault();
                }
            }
        },
        validateNumberHex(number){
            this.number=number;
            var theEvent = window.event;
            
            let key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode( key );
            
            var regex = /[0-9]|\-|[A-F]/;
            if( !regex.test(key) ) {
                theEvent.returnValue = false;
                if(theEvent.preventDefault) theEvent.preventDefault();
            }
            if (/\-/.test(key)) {
                console.log((this.number.toString()))
                if ((this.number.toString()).length > 0) {
                    theEvent.returnValue = false;
                    if (theEvent.preventDefault) theEvent.preventDefault();
                }
            }
        },
        validateNumber(number){
            this.number=number;
            var theEvent = window.event;
            
            let key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode( key );
            
            var regex = /[0-9]|\-/;
            if( !regex.test(key) ) {
                theEvent.returnValue = false;
                if(theEvent.preventDefault) theEvent.preventDefault();
            }
            if (/\-/.test(key)) {
                console.log((this.number.toString()))
                if ((this.number.toString()).length > 0) {
                    theEvent.returnValue = false;
                    if (theEvent.preventDefault) theEvent.preventDefault();
                }
            }
        },
        validateNumberOperatorDiv(number){
            this.number=number;
            var theEvent = window.event;
            
            console.log(theEvent)
            let key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode( key );
            console.log(key)
            var regex = /[0-9]|\-/;
            if( !regex.test(key) ) {
                console.log('operator  div function')
                theEvent.returnValue = false;
                if(theEvent.preventDefault) theEvent.preventDefault();
            }
            if (/\-/.test(key)) {
                console.log((this.number.toString()))
                if ((this.number.toString()).length > 0) {
                    theEvent.returnValue = false;
                    if (theEvent.preventDefault) theEvent.preventDefault();
                }
            }
            if(/0/.test(key)){
                console.log('preventdefault')
                if((this.number.toString()).length == 0) {
                    
                    theEvent.returnValue = false;
                    
                    if (theEvent.preventDefault) {
                        
                        theEvent.preventDefault();
                        
                    }
                }
            }
            console.log('input end')
        }
    }
}
</script>