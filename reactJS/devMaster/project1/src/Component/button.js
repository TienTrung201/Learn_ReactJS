import formSubmit from "../EventListStudents/checkForm";
import * as controlForm from "../EventListStudents/controlForm"
export const btnReplace = ({ props, children }) => {
    // props.msvRef.current.focus();
    return (
        <button
            name="submit"
            onClick={(e) => {
                e.preventDefault();
                if (props.buttonReplace) {
                    if (formSubmit(document.forms.formSubmit)) {
                        controlForm.replaceInformation(props.students, props.checkStudent, props.setCheckStudent, document.forms.formSubmit, props.setStudent)
                        props.setIsDisplayForm(false)
                    } else {
                        return
                    }

                } else {
                    if (formSubmit(document.forms.formSubmit)) {
                        controlForm.addStudent(document.forms.formSubmit, props.setStudent)
                        props.setIsDisplayForm(false)
                        props.setCheckStudent(props.students.length+1) 
                    } else {
                        return
                    }
                }

            }}
            type="submit"
            className="btn btn-primary me-2 submitBtn">
            {children}
        </button>
    )
}