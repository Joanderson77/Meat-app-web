import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { RadioOption } from './radio-option.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

 @Input() options: RadioOption[]
 value: any
 onChange: any


  constructor() { }

  ngOnInit() {
  }

  setValue(value: any){
    this.value = value
    this.onChange(this.value)
  }

  /**
     * Chamado pelas diretivas para passar um valor para o cmomponente.
     */
    writeValue(obj: any): void{
      this.value = obj
      

    }
    /**
     * Passam uma função sempre que um valor interno do componente mudar.
     */
    registerOnChange(fn: any): void{
      this.onChange = fn
    }
    /**
     * Registrar que o usuário entrou no componente.
     */
    registerOnTouched(fn: any): void{

    }
    /**
     * This function is called when the control status changes to or from "DISABLED".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param isDisabled
     */
    setDisabledState?(isDisabled: boolean): void{

    }

}
