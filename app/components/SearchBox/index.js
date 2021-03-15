/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Col, Card, Select, Button, Image, Form, Spin } from 'antd';
import debounce from 'lodash/debounce';
import { SearchOutlined } from '@ant-design/icons';
import csk from '../../images/csk.jpg';
import kxip from '../../images/kxip.jpg';
import mi from '../../images/mi.jpg';
import dc from '../../images/dc.png';
import kkr from '../../images/kkr.jpg';
import srh from '../../images/srh.jpg';
import rcb from '../../images/rcb.png';
import rr from '../../images/rr.jpg';
function DebounceSelect({ fetchOptions, debounceTimeout = 800, ...props }) {
  const [fetching, setFetching] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const fetchRef = React.useRef(0);
  const debounceFetcher = React.useMemo(() => {
    const loadOptions = value => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      fetchOptions(value).then(newOptions => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);
  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
} // Usage of DebounceSelect

async function fetchUserList() {
  return fetch('https://randomuser.me/api/?results=7')
    .then(response => response.json())
    .then(body =>
      body.results.map(user => ({
        label: `${user.name.first} ${user.name.last}`,
        value: user.login.username,
      })),
    );
}
export default function SeachBox() {
  const { Option } = Select;
  const [value, setValue] = React.useState([]);

  return (
    <div className="center_dashboard">
      <div className="site-card-wrapper">
        <Row gutter={16} justify="center">
          <Col span={24}>
            <Card title="IPL SEARCH" bordered={false}>
              <Form layout="vertical">
                <Row gutter={23} justify="center" align="middle">
                  <Col span={5}>
                    <Form.Item
                      label="Player Name"
                      tooltip="Please Enter a Player Name"
                    >
                      <DebounceSelect
                        mode="multiple"
                        value={value}
                        placeholder="Select Player Name"
                        fetchOptions={fetchUserList}
                        onChange={newValue => {
                          setValue(newValue);
                        }}
                        style={{
                          width: '100%',
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Form.Item
                      label="Team Name"
                      tooltip="Please Select a Team Name"
                    >
                      <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Select a Team"
                        optionLabelProp="label"
                      >
                        <Option value="RCB" label="RCB">
                          <div className="demo-option-label-item">
                            Royal Challenger Bangalore (RCB)
                          </div>
                        </Option>
                        <Option value="KKR" label="KKR">
                          <div className="demo-option-label-item">
                            Kolkata Knight Riders (KKR)
                          </div>
                        </Option>
                        <Option value="KXIP" label="KXIP">
                          <div className="demo-option-label-item">
                            Kings XI Punjab (KXIP)
                          </div>
                        </Option>
                        <Option value="MI" label="MI">
                          <div className="demo-option-label-item">
                            Mumbai Indians (MI)
                          </div>
                        </Option>
                        <Option value="DC" label="DC">
                          <div className="demo-option-label-item">
                            Delhi Capitals (DC)
                          </div>
                        </Option>
                        <Option value="SRH" label="SRH">
                          <div className="demo-option-label-item">
                            Sunriser Hyderabad (SRH)
                          </div>
                        </Option>
                        <Option value="RR" label="RR">
                          <div className="demo-option-label-item">
                            Rajasthan Royals (RR)
                          </div>
                        </Option>
                        <Option value="CSK" label="CSK">
                          <div className="demo-option-label-item">
                            Chennai Super Kings (CSK)
                          </div>
                        </Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Form.Item
                      label="Venue"
                      tooltip="Please Enter a Team Venue"
                    >
                      <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Select Team Venue"
                        optionLabelProp="label"
                      >
                        <Option value="MCS" label="MCS">
                          <div className="demo-option-label-item">
                            M. Chinnaswamy Stadium, Bangalore
                          </div>
                        </Option>
                        <Option value="PCA" label="PCA">
                          <div className="demo-option-label-item">
                            PCA Stadium, Mohali
                          </div>
                        </Option>
                        <Option value="FSK" label="FSK">
                          <div className="demo-option-label-item">
                            Feroz Shah Kotla Ground, Delhi
                          </div>
                        </Option>
                        <Option value="EDN" label="EDN">
                          <div className="demo-option-label-item">
                            Eden Garden, Kolkata
                          </div>
                        </Option>
                        <Option value="WK" label="WK">
                          <div className="demo-option-label-item">
                            Wankhede Stadium, Mumbai
                          </div>
                        </Option>
                        <Option value="SMS" label="SMS">
                          <div className="demo-option-label-item">
                            Sawai Mansingh Stadium, Jaipur
                          </div>
                        </Option>
                        <Option value="RGI" label="RGI">
                          <div className="demo-option-label-item">
                            Rajiv Gandhi International Cricket Stadium,
                            Hyderabad
                          </div>
                        </Option>
                        <Option value="MAC" label="MAC">
                          <div className="demo-option-label-item">
                            M. A. Chidambaram Stadium, Chennai
                          </div>
                        </Option>
                        <Option value="HS" label="HS">
                          <div className="demo-option-label-item">
                            Holkar Stadium, Indore
                          </div>
                        </Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Form.Item
                      label="Team Owner"
                      tooltip="Please Enter a Owner Name"
                    >
                      <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Select Owner Name"
                        optionLabelProp="label"
                      >
                        <Option value="CSK ltd" label="CSK ltd">
                          <div className="demo-option-label-item">
                            Chennai Super Kings Cricket Limited
                          </div>
                        </Option>
                        <Option value="GMR & JSW" label="GMR">
                          <div className="demo-option-label-item">
                            GMR Group and JSW Group
                          </div>
                        </Option>
                        <Option value="KXIP Owners" label="KXIP Owners">
                          <div className="demo-option-label-item">
                            Mohit Burman, Ness Wadia, Preity Zinta, Karan Paul
                          </div>
                        </Option>
                        <Option value="Reliance Industries" label="Reliance">
                          <div className="demo-option-label-item">
                            Reliance Industries
                          </div>
                        </Option>
                        <Option
                          value="Red Chillies Ent"
                          label="Red Chillies Ent"
                        >
                          <div className="demo-option-label-item">
                            Red Chillies Entertainment and Mehta Group
                          </div>
                        </Option>
                        <Option value="Sun TV Network" label="Sun Tv">
                          <div className="demo-option-label-item">
                            Sun TV Network
                          </div>
                        </Option>
                        <Option value="RR Owners" label="RR Owners">
                          <div className="demo-option-label-item">
                            Amisha Hathiramani, Manoj Badale, Lachlan Murdoch,
                            Ryan Tkalcevic, Shane Warne
                          </div>
                        </Option>

                        <Option value="United Spirits" label="United Spirits">
                          <div className="demo-option-label-item">
                            United Spirits
                          </div>
                        </Option>
                        <Option value="CSK ltd" label="CSK ltd">
                          <div className="demo-option-label-item">
                            Chennai Super Kings Cricket Limited
                          </div>
                        </Option>
                        <Option value="CSK ltd" label="CSK ltd">
                          <div className="demo-option-label-item">
                            Chennai Super Kings Cricket Limited
                          </div>
                        </Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={3}>
                    <Button type="primary" icon={<SearchOutlined />}>
                      Search
                    </Button>
                  </Col>
                </Row>
                <Row justify="center" gutter={24}>
                  <Col span={20}>
                    <Row
                      gutter={60}
                      justify="center"
                      style={{ marginTop: '20px' }}
                    >
                      <Col span={3}>
                        <a href="https://www.iplt20.com/teams/chennai-super-kings">
                          <Image
                            width={100}
                            src={csk}
                            style={{ marginTop: '20px', marginLeft: '-60px' }}
                            preview={false}
                          />
                        </a>
                      </Col>
                      <Col span={3}>
                        <a href="https://www.iplt20.com/teams/punjab-kings">
                          <Image
                            width={80}
                            src={kxip}
                            style={{ marginTop: '20px', marginLeft: '-20px' }}
                            preview={false}
                          />
                        </a>
                      </Col>
                      <Col span={3}>
                        <a href="https://www.iplt20.com/teams/mumbai-indians">
                          <Image
                            width={100}
                            src={mi}
                            style={{ marginTop: '30px', marginLeft: '-10px' }}
                            preview={false}
                          />
                        </a>
                      </Col>
                      <Col span={3}>
                        <a href="https://www.iplt20.com/teams/delhi-capitals">
                          <Image
                            width={90}
                            src={dc}
                            style={{ margin: '20px', marginLeft: '0px' }}
                            preview={false}
                          />
                        </a>
                      </Col>
                      <Col span={3}>
                        <a href="https://www.iplt20.com/teams/kolkata-knight-riders">
                          <Image
                            width={70}
                            src={kkr}
                            style={{ marginTop: '10px', marginLeft: '10px' }}
                            preview={false}
                          />
                        </a>
                      </Col>
                      <Col span={3}>
                        <a href="https://www.iplt20.com/teams/sunrisers-hyderabad">
                          <Image
                            width={100}
                            src={srh}
                            style={{ marginTop: '40px' }}
                            preview={false}
                          />
                        </a>
                      </Col>
                      <Col span={3}>
                        <a href="https://www.iplt20.com/teams/royal-challengers-bangalore">
                          <Image
                            width={70}
                            src={rcb}
                            style={{ margin: '10px', marginLeft: '30px' }}
                            preview={false}
                          />
                        </a>
                      </Col>
                      <Col span={3}>
                        <a href="https://www.iplt20.com/teams/rajasthan-royals">
                          <Image
                            width={90}
                            src={rr}
                            style={{ margin: '30px' }}
                            preview={false}
                          />
                        </a>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
