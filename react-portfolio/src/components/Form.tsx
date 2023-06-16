
import './Form.css'

const Form = () => {
    return (
        <form>
            <div className="mb-3"><label htmlFor="name" className="form-label">Name</label>
            <input id ="name" type="text" className="form-control" /></div>
            <div className="mb-3"><label htmlFor="email" className="form-label">Email Address</label>
            <input id ="email" type="text" className="form-control" /></div>
            <button className="btn btn-primary">Submit</button>

        </form>
    )
}

export default Form;