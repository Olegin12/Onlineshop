import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import GoodCard from "./GoodCard";

function UncontrolledExample() {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="profile" title="Woman">
                <p>You can see one kind of clothes</p>
                <GoodCard> A</GoodCard>
            </Tab>
            <Tab eventKey="home" title="Man">
                <p>And here is another kind</p>
                <GoodCard> A</GoodCard>
            </Tab>
        </Tabs>
    );
}

export default UncontrolledExample;