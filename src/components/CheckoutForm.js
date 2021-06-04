import React from "react";


// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

class CheckoutForm extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    formError:(null),
    formSuccess:(null)
  };

  handleChanges = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]:value
    })
  };

  handleSubmit = (e, error) => {
    e.preventDefault();

    if(error){
      this.setState({formError: true, formSuccess: false});
    }
    else{
      this.setState({formError: false, formSuccess: true});
    }
  };

  //Life Cycle
  componentDidMount(){
    this.formData = JSON.parse(localStorage.getItem('form'))

    if(localStorage.getItem('form')){
      this.setState({
        firstName: this.formData.firstName,
    lastName: this.formData.lastName,
    address: this.formData.address,
    city: this.formData.city,
    state: this.formData.state,
    zip: this.formData.zip,
      })

    }else{
        this.setState({
          firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
        })
    }
  }

  componentWillUpdate(nextProps, nextState){
    localStorage.setItem('form', JSON.stringify(nextState))
  }

  render(){
  return (
    <>
      <form onSubmit={this.handleSubmit} success={this.state.formSuccess} error={this.state.formError}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={this.state.address}
            onChange={this.handleChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={this.state.city} onChange={this.handleChanges} />
        </label>
        <label>
          State:
          <input name="state" value={this.state.state} onChange={this.handleChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={this.state.zip} onChange={this.handleChanges} />
        </label>
        <button>Checkout</button>
      </form>
      {/*<message success content= {<div className="success-message" data-testid="successMessage">
      <p>
        You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
      </p>
      <p>Your new green friends will be shipped to:</p>
      <br />
      <br />
      <p>
        {this.state.firstName} {this.state.lastName}
      </p>
      <p>{this.state.address}</p>
      <p>
        {this.state.city}, {this.state.state} {this.state.zip}
      </p>
        </div>
        } />*/}
      </>
  );
  };
};

export default CheckoutForm;
