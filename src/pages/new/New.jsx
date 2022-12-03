import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./new.scss";
import { DriveEtaRounded } from "@mui/icons-material";

const New = () => {
    return(
        <div className="new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>Add New User</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />
                    </div>
                    <div className="right">
                        <form>
                        <div className="formInput">
                                <label htmlFor="file">
                                  Image: <DriveFolderUploadOutlinedIcon className="icon"/>
                                </label>
                                <input type="file" id="file" style={{display: "none"}} />
                                
                            </div>
                            <div className="formInput">
                                <label>Username</label>
                                <input type='text' placeholder='john_doe'></input>
                            </div>
                            <div className="formInput">
                                <label>Full Name</label>
                                <input type='text' placeholder='john_doe'></input>
                            </div>
                            <div className="formInput">
                                <label>Email</label>
                                <input type='text' placeholder='john_doe@gmail.com'></input>
                            </div>
                            <div className="formInput">
                                <label>Phone</label>
                                <input type='text' placeholder='+1 234 567 89'></input>
                            </div>
                            <div className="formInput">
                                <label>Password</label>
                                <input type='text'></input>
                            </div>
                            <div className="formInput">
                                <label>Address</label>
                                <input type='text' placeholder="Elton St. 216 NewYork"></input>
                            </div>
                            <div className="formInput">
                                <label>Country</label>
                                <input type='text' placeholder="USA"></input>
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New