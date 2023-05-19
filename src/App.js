import React, { Component } from "react";
import "./App.css";


import Footer from "./components/Footer";
import CV from "./components/CV";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      info: {
        // Personal Information
        id: uniqid(),
        firstName: "",
        email: "",
        lastName: "",
        title: "",
        address: "",
        description: "",
        phone_number: "",
        // Experience
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",

        // Education
        universityName: "",
        universityCity: "",
        degree: "",
        subject: "",
        universityFrom: "",
        universityTo: "",
      },
      infos: [],
    };
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      info: {
        ...prevState.info,
        [id]: value,
      },
    }));
  };

  onSubmitInfo = (e) => {
    e.preventDefault();
    // Check if info.** is empty
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone_number",
      // 'title',
      // 'address',
      // 'description',
      // 'position',
      // 'company',
      // 'city',
      // 'from',
      // 'to',
      // 'universityName',
      // 'universityCity',
      // 'degree',
      // 'subject',
      // 'universityFrom',
      // 'universityTo',
    ];

    for (const field of requiredFields) {
      if (this.state.info[field].trim() === "") {
        return; // Exit the function if any of the fields are empty
      }
    }

    const newInfo = {
      id: uniqid(),
      firstName: this.state.info.firstName,
      email: this.state.info.email,
      lastName: this.state.info.lastName,
      title: this.state.info.title,
      address: this.state.info.address,
      description: this.state.info.description,
      phone_number: this.state.info.phone_number,
      position: this.state.info.position,
      company: this.state.info.company,
      city: this.state.info.city,
      from: this.state.info.from,
      to: this.state.info.to,
      universityName: this.state.info.universityName,
      universityCity: this.state.info.universityCity,
      degree: this.state.info.degree,
      subject: this.state.info.subject,
      universityFrom: this.state.info.universityFrom,
      universityTo: this.state.info.universityTo,
    };
    this.setState((prevState) => ({
      infos: [...prevState.infos, newInfo],
      info: {
        id: uniqid(),
        firstName: "",
        email: "",
        lastName: "",
        title: "",
        address: "",
        description: "",
        phone_number: "",
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
        universityName: "",
        universityCity: "",
        degree: "",
        subject: "",
        universityFrom: "",
        universityTo: "",
      },
    }));
  };

  render() {
    const { info, infos } = this.state;
    return (
      <div className="App">
        <h1 className="page-title">CV Generator</h1>
        <div className="content">
          <div className="left-container">
            <form className="form-information" onSubmit={this.onSubmitInfo}>
              <div className="content-information">
                <h1>Personal Information</h1>
                <label className="name_label" htmlFor="firstName">
                  <input
                    placeholder="First Name"
                    onChange={this.handleChange}
                    value={info.firstName}
                    className="name_input"
                    type="text"
                    id="firstName"
                  />
                </label>

                <label className="name_label" htmlFor="lastName">
                  <input
                    placeholder="Last Name"
                    onChange={this.handleChange}
                    value={info.lastName}
                    className="name_input"
                    type="text"
                    id="lastName"
                  />
                </label>

                <label className="name_label" htmlFor="email">
                  <input
                    placeholder="Email"
                    onChange={this.handleChange}
                    value={info.email}
                    className="name_input"
                    type="text"
                    id="email"
                  />
                </label>

                <label className="name_label" htmlFor="phone_number">
                  <input
                    placeholder="Phone number"
                    onChange={this.handleChange}
                    value={info.phone_number}
                    className="name_input"
                    type="text"
                    id="phone_number"
                  />
                </label>
                <label className="name_label" htmlFor="title">
                  <input
                    placeholder="Title"
                    onChange={this.handleChange}
                    value={info.title}
                    className="name_input"
                    type="text"
                    id="title"
                  />
                </label>

                <label className="name_label" htmlFor="address">
                  <input
                    placeholder="Address"
                    onChange={this.handleChange}
                    value={info.address}
                    className="name_input"
                    type="text"
                    id="address"
                  />
                </label>
                <label className="name_label" htmlFor="description">
                  <input
                    placeholder="Description"
                    onChange={this.handleChange}
                    value={info.description}
                    className="name_input"
                    type="text"
                    id="description"
                  />
                </label>
              </div>
              <div className="content-experience">
                <h1>Experience</h1>
                <label className="name_label" htmlFor="position">
                  <input
                    placeholder="Position"
                    onChange={this.handleChange}
                    value={info.position}
                    className="name_input"
                    type="text"
                    id="position"
                  />
                </label>

                <label className="name_label" htmlFor="company">
                  <input
                    placeholder="Company"
                    onChange={this.handleChange}
                    value={info.company}
                    className="name_input"
                    type="text"
                    id="company"
                  />
                </label>

                <label className="name_label" htmlFor="city">
                  <input
                    placeholder="City"
                    onChange={this.handleChange}
                    value={info.city}
                    className="name_input"
                    type="text"
                    id="city"
                  />
                </label>

                <label className="name_label" htmlFor="from">
                  <input
                    placeholder="From"
                    onChange={this.handleChange}
                    value={info.from}
                    className="name_input"
                    type="text"
                    id="from"
                  />
                </label>

                <label className="name_label" htmlFor="to">
                  <input
                    placeholder="To"
                    onChange={this.handleChange}
                    value={info.to}
                    className="name_input"
                    type="text"
                    id="to"
                  />
                </label>
              </div>
              <div className="content-education">
                <h1>Education</h1>

                <label className="name_label" htmlFor="universityName">
                  <input
                    placeholder="University Name"
                    onChange={this.handleChange}
                    value={info.universityName}
                    className="name_input"
                    type="text"
                    id="universityName"
                  />
                </label>

                <label className="name_label" htmlFor="universityCity">
                  <input
                    placeholder="University City"
                    onChange={this.handleChange}
                    value={info.universityCity}
                    className="name_input"
                    type="text"
                    id="universityCity"
                  />
                </label>

                <label className="name_label" htmlFor="degree">
                  <input
                    placeholder="Degree"
                    onChange={this.handleChange}
                    value={info.degree}
                    className="name_input"
                    type="text"
                    id="degree"
                  />
                </label>

                <label className="name_label" htmlFor="subject">
                  <input
                    placeholder="Subject"
                    onChange={this.handleChange}
                    value={info.subject}
                    className="name_input"
                    type="text"
                    id="subject"
                  />
                </label>

                <label className="name_label" htmlFor="universityFrom">
                  <input
                    placeholder="University From"
                    onChange={this.handleChange}
                    value={info.universityFrom}
                    className="name_input"
                    type="text"
                    id="universityFrom"
                  />
                </label>

                <label className="name_label" htmlFor="universityTo">
                  <input
                    placeholder="University To"
                    onChange={this.handleChange}
                    value={info.universityTo}
                    className="name_input"
                    type="text"
                    id="universityTo"
                  />
                </label>
              <button>Submit</button>
              </div>

            </form>
          </div>
          <div className="right-container">
            <CV infos={infos} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
