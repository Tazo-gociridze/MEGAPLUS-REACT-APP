import H2Title from '../../../../utils/h2title';

import { Card, Button, Row, Col } from 'antd';

const plans = [
  { title: 'Free', price: '0₾', features: ['1 მომხმარებელი', 'ძირითადი ფუნქციები'] },
  { title: 'Standard', price: '25₾', features: ['5 მომხმარებელი', 'ყველა ფუნქცია'] },
  { title: 'Premium', price: '50₾', features: ['უპირატესობა', 'პირადი მხარდაჭერა'] },
];

const Tariffs = () => {
  return (
    <div className="!mt-[100px]">
      <H2Title title="ტარიფები" className='!mb-[100px]'/>

      <Row gutter={[16, 16]}>
        {plans.map((plan, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              title={plan.title}
              bordered={true}
              extra={<Button type="primary" className='bg-red-500'>შესყიდვა</Button>}
            >
              <h2 style={{ fontSize: 24 }}>{plan.price}/თვე</h2>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Tariffs;
