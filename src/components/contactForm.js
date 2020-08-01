import React, { useState }  from "react"
import axios from "axios";
const ContactForm = () => {
    
    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/4113f349-e99f-495a-b529-18c2cb40e11c",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Thanks!", form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };
    return (
        <div>
            <h3 className="mt-2">Let's Chat!</h3>
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleOnSubmit}
            >
            <div className="form-group">
                <label for="exampleInputEmail1" required="required">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div> 
            <div className="form-group">
                <label for="exampleInputName">Name</label>
                <input type="text" name="name" className="form-control" id="exampleInputName" placeholder="Enter your name" required="required"/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlSelect1">What's up?</label>
                <select className="form-control" id="exampleFormControlSelect1" name="platform" required="required">
                <option>Would like to chat</option>
                <option>Just saying hi</option>
                <option>I like your site!</option>
                </select>
            </div>
            <button type="submit" className="my-4 bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"  disabled={serverState.submitting}>
                Submit
            </button>
            {serverState.status && (
                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
                </p>
            )}
            </form>
        </div>
    );
  };
  
  export default ContactForm;