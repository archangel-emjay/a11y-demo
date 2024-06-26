import { useState } from "react";

const BasicPage = () => {
    const [tcAgree, setTcAgree] = useState<boolean>(false);
    return (<>
        <h1>Change your communication preferences</h1>
        <form>
            <label>
                <input type="checkbox" />
                Email
            </label>
            <br />
            <label>
                <input type="checkbox" />
                SMS
            </label>
            <br />
            <label>
                <input type="checkbox" />
                Semaphore
            </label>
            <br />
            <label>
                <input type="checkbox" value={tcAgree.toString()} onChange={() => setTcAgree(!tcAgree)} />
                I have read and accepted the <a href="/#">Terms and Conditions</a>
            </label>
            <br/>
            <input type="submit" disabled={!tcAgree} value='Submit'/>
        </form>
    </>);
};

export default BasicPage;
