import './App.css';
import {Table,Row,Col,Form, Input, Button} from "antd";

function App() {

  // const student = [{
  //   "first_name": "Nona",
  //   "last_name": "St. Hill",
  //   "email": "nsthill0@miitbeian.gov.cn",
  //   "gender": "Female",
  //   "university": "Istanbul Arel University"
  // }, {
  //   "first_name": "Felice",
  //   "last_name": "Wilcocke",
  //   "email": "fwilcocke1@nytimes.com",
  //   "gender": "Male",
  //   "university": "University of Maryland Baltimore County"
  // }, {
  //   "first_name": "Chester",
  //   "last_name": "Ruske",
  //   "email": "cruske2@spotify.com",
  //   "gender": "Male",
  //   "university": "Rafsanjan University of Medical Sciences"
  // }, {
  //   "first_name": "Christye",
  //   "last_name": "Biddy",
  //   "email": "cbiddy3@sakura.ne.jp",
  //   "gender": "Female",
  //   "university": "Universidad Cientifica Latinoamericana de Hidalgo"
  // }, {
  //   "first_name": "Naoma",
  //   "last_name": "Bithell",
  //   "email": "nbithell4@is.gd",
  //   "gender": "Female",
  //   "university": "Kashan University of Medical Sciences"
  // }, {
  //   "first_name": "Adore",
  //   "last_name": "Spaldin",
  //   "email": "aspaldin5@wunderground.com",
  //   "gender": "Female",
  //   "university": "Canisius College"
  // }]

  // const columns = [
  //   {
  //     title:"Email",
  //     dataIndex:"email"
  //   },
  //   {
  //     title:"Gender",
  //     dataIndex: "gender"
  //   },
  //   {
  //     title: "First name",
  //     dataIndex: "first_name"
  //   },
  //   {
  //     title: "Last name",
  //     dataIndex: "last_name"
  //   },
  //   {
  //     title: "University",
  //     dataIndex: "university"
  //   }
  // ]

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  let onFinish = (values) => {
    console.log(values)
  }


  return (
    <div className="App">
      <Row justify='center'>
        {/* reponsive xs sm md = {Numbe of span (max 24)} */}
        <Col sm={24} md={20} lg={16} xl={12} >
          {/* <Table bordered columns={columns} dataSource={student}/> */}
          <Form onFinish= {onFinish} {...layout}>
            <Form.Item label="Name: " name="name"
            rules={[{required:true, message:"ต้องกรอกช่องนี้"},
            {max:6,min:3, message:"ชื่ออยู่ระหว่าง 3 ถึง 6"}]}>
              <Input placeholder="Name"/>
            </Form.Item>
            <Form.Item label="Phone Number: " name="phone" rules={[{len:10,     message:"เบอร์โทรไม่ถูกต้อง"}]}>
              <Input placeholder="Phone NUmber"/>
            </Form.Item>
            <Form.Item label="Email: " name="email"
            rules={[{type:'email', message:"รูปแบบอีเมลไม่ถูกต้อง"}]}>
              <Input placeholder="Email"/>
            </Form.Item>
            <Form.Item label="Password: " name="password"
            rules={[{required:true, message:"ต้องกรอกช่องนี้"},
            {max:20,min:6, message:"รหัสผ่านต้องอยู่ระหว่าง 6 ถึง 20 ตัว"}]}>
              <Input placeholder="Password" type="password"/>
            </Form.Item>
            <Button htmlType="submit">Register</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default App;
