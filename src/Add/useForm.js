import React , {useState , useEffect} from 'react'

const useForm = (callback  , ValidateInfo) => {
    const [values , setValues] = useState({country:"" , city:"" , year:"" , pm25:"" , latitude:"" , longitude:"" , population:"" , wbinc_16_text:"" , region:"",conc_pm25:"",color_pm25:""});
    const [errors , setErrors] = useState({});
    const [isSubmitting , setIsSubmiting] = useState(false);

    const handleChange = (e) => {
        const {name , value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(ValidateInfo(values))
        setIsSubmiting(true)
    };

    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {
            callback(values);
            setValues({country:"" , city:"" , year:"" , pm25:"" , latitude:"" , longitude:"" , population:"" , wbinc_16_text:"" , region:"",conc_pm25:"",color_pm25:""});
          }
        },[errors]);

    return {handleChange, values , handleSubmit , errors}
}

export default useForm
