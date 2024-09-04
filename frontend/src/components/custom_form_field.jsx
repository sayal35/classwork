import "./styles/custom_form_field_style.css"
export default function CustomFormField({label,placeholder,type,value,cName,onChange,ref})
{
    return(
        <div id="form-field">
            <p>
            <label id="label" for={cName}>{label}</label>
            </p>
            <input id="field" name={cName} value={value} placeholder={placeholder} type={type} onChange={onChange} ref={ref}/>
        </div>
    );
}