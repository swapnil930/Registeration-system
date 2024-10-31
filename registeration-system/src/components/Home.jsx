import React, { useEffect, useState } from 'react';
import { UserServices } from '../Services/UserServices';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const Home = ({ user }) => {

let navigate=useNavigate();

  const [state, setState] = useState({
    loading: true,
    users: [],
    errorMessage: ""
  });

  useEffect(() => {
    const fetchUsers = async () => {
      setState((prevState) => ({
        ...prevState,
        loading: true,
        users: [],
      }));

      try {
        const response = await UserServices.getAllUsers();
        setState({
          loading: false,
          users: response.data,
          errorMessage: ""
        });
      } catch (error) {
        setState({
          loading: false,
          users: [],
          errorMessage: "Empty List...!!"
        });
      }
    };

    fetchUsers();
  }, []);


  if (!user) return <div><Spinner/></div>

  const { loading, users, errorMessage } = state;

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/user/login');
  };

  return (
    <>

<nav>
  <div className="container-fluid bg-dark text-light p-2">
    <div className="d-flex justify-content-between align-items-center">
      <Link to="/home" style={{ textDecoration: 'none' }} className="text-center flex-grow-1">
        <h4 className="h3">
          <span className="h2">Welcome {user.username}</span>
        </h4>
      </Link>
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
    </div>
  </div>
</nav>

     {loading ? (<Spinner/>) : (            
              
        <section className="user-list">
            {errorMessage&& <div className="alert alert-info text-center">{errorMessage}</div>}
               <div className="container mt-5">
                   <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                      <div style={{ maxHeight: '300px', width:"700px", overflowY: 'auto'}}>
                        <table className="table table-striped">
                          <thead className="table-dark"style={{ position: 'sticky', top:'0', backgroundColor:"black", zIndex: '1' }}>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col">Date of Birth</th>
                              <th scope="col">Email</th>
                              <th scope="col">Password</th>
                            </tr>
                          </thead>
                          <tbody>
                            {users && users.length > 0 ? (
                              users.map((user, index) => (
                                <tr key={user.id}>
                                  <th scope="row">{index + 1}</th>
                                  <td>{user.username}</td>
                                  <td>{user.DOB}</td>
                                  <td>{user.email}</td>
                                  <td>{user.password}</td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="5">No users found.</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
           
           
           )}      
  </>
            
      );
    };

export default Home;
