export default function ValidateInfo(values) {
    let errors = {};

    // Check null values and validate type
    if(!values.country.trim()) {
        errors.country = "Country field is required"
    }

    if(!values.city.trim()) {
        errors.city = "City field is required"
    }

    if(!values.year.trim()) {
        errors.year = "Year field is required"
    }else if(!parseInt(values.year)) {
        errors.year = "Year can fill only number"
    }
    
    if(!values.pm25.trim()) {
        errors.pm25 = "PM25 field is required"
    }else if (!parseFloat(values.pm25)) {
        errors.pm25 = "PM25 can fill only number"
    }

    if(!values.latitude.trim()) {
        errors.latitude = "Latitude field is required"
    }else if (!parseFloat(values.latitude)) {
        errors.latitude = "Latitude can fill only number"
    }

    if(!values.longitude.trim()) {
        errors.longitude = "Longitude field is required"
    }else if (!parseFloat(values.longitude)){
        errors.longitude = "Longitude can fill only number"
    }

    if(!values.population.trim()) {
        errors.population = "Population field is required"
    }else if (!parseInt(values.population)) {
        errors.population = "Population can fill only number"
    }

    if(!values.wbinc_16_text.trim()) {
        errors.wbinc_16_text = "wbinc_16_text field is required"
    }

    if(!values.region.trim()) {
        errors.region = "Region field is required"
    }

    if(!values.conc_pm25.trim()) {
        errors.conc_pm25 = "conc_pm25 field is required"
    }

    if(!values.color_pm25.trim()) {
        errors.color_pm25 = "color_pm25 field is required"
    }
    return errors;
}
