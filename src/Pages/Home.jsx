import React, { Fragment, useState } from "react";

const Home = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [mail, setMail] = useState("");
    const [formData, setFormData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    // const [searchIndex, setSearchIndex] = useState(""); // State variable to store the search index
    const [showTable, setShowTable] = useState(false);
    const [searchInput, setSearchInput] = useState(""); // State variable to store the search input
    const [searchResults, setSearchResults] = useState([]); // State variable to store search results
    // const [searchIndex, setSearchIndex] = useState(""); // Add searchIndex state
    const [isLoading, setIsLoading] = useState(false);
    const [loadingRow, setLoadingRow] = useState(null);




    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleNum = (e) => {
        setNumber(e.target.value);
    };
    const handlemail = (e) => {
        setMail(e.target.value);
    };

    const handleSubmit = (e) => {
        setSearchInput("");
        e.preventDefault();

        if (!/^\d{0,10}$/.test(number)) {
            alert("Please enter a valid phone number (maximum 10 digits)");
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(mail)) {
            alert("Please enter a valid email address");
            return;
        }

        if (!name.trim() || !number.trim() || !mail.trim()) {
            alert("Please fill in all fields");
            return;
        }

        const newFormData = { name, number, mail };



        if (editIndex !== null) {
            const updatedFormData = [...formData];
            updatedFormData[editIndex] = { name, number, mail };
            setFormData(updatedFormData);
            setEditIndex(null);
        } else {
            const newFormData = { name, number, mail };
            setFormData([...formData, newFormData]);
        }

        setName("");
        setNumber("");
        setMail("");
        setShowTable(true);
        setIsLoading(true);

        setTimeout(() => {
            setShowTable(true); // Show table after 4 seconds
            setIsLoading(false); // Hide loading state
        }, 500);
    };

    const handleDelete = (index) => {
        const newData = [...formData];
        newData.splice(index, 1);
        setFormData(newData);
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        const editedFormData = formData[index];
        console.log("Edited Data:", editedFormData);
        setName(editedFormData.name);
        setNumber(editedFormData.number);
        setMail(editedFormData.mail);


    };

    const handleSearch = (e) => {
        const value = e.target.value;

        const results = formData.filter((data) => {
            return (
                data.name.toLowerCase().includes(value.toLowerCase()) ||
                data.number.includes(value) ||
                data.mail.toLowerCase().includes(value.toLowerCase())
            );
        });

        setSearchResults(results);
    };

    const clearSearch = () => {
        // setSearchInput("");
        // setSearchResults([]);
    };

    return (
        <Fragment>
            <div className="container">
                <div className="form-datas">
                    <form action="" className="form-intro">
                        {/* <h2>Reg-who U R </h2> */}

                        <label>Name:</label>
                        <input
                            type="text"
                            placeholder="ENTER YOUR NAME"
                            onChange={handleName}
                            value={name}
                            required
                        />

                        <label>Phone Number:</label>
                        <input
                            placeholder="PHONE NUMBER"
                            onChange={handleNum}
                            value={number}
                            maxLength={10}
                            pattern="\d{10}"
                            title="Please enter a 10-digit phone number"
                            required
                        />

                        <label>Email Address:</label>
                        <input
                            placeholder="YOUR EMAIL ADD"
                            type="email"
                            onChange={handlemail}
                            value={mail}
                            required
                        />
                        <button
                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                            className="submit-button"
                        >
                            SUBMIT
                        </button>
                       
                        {/* <button onClick={handleSearch}>Search</button> */}
                        {/* <button onClick={clearSearch}>Clear Search</button> */}
                    </form>
                </div>

                {showTable && (
                    <div>
                        <input className="search"
                            type="text"
                            placeholder="Search"
                            value={searchInput}
                            onChange={handleSearch}
                        />
                            <table>
                                <thead>
                                    <tr className="tablehead">
                                        <th>Name</th>
                                        <th>Phone Number</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                {isLoading ? (
                            <div className="wait">Wait...</div>
                        ) : (
                                <tbody>
                                    {(searchResults.length > 0 ? searchResults : formData).map((data, index) => (
                                        <tr key={index} className="tablehead">
                                            <td>{data.name}</td>
                                            <td>{data.number}</td>
                                            <td>{data.mail}</td>
                                            <td className="edit-delete-cell">
                                                <>
                                                    <button onClick={() => handleEdit(index)} className="edit-button">EDIT</button>
                                                    <button onClick={() => handleDelete(index)} className="delete-button">DELETE</button>
                                                </>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                        )}

                            </table>
                    </div>
                )}

            </div>
        </Fragment>
    );
};
export default Home;
