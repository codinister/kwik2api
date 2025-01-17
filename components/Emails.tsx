import {
  Body,
  Container,
  Head,
  Html,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface PlaidVerifyIdentityEmailProps {
  comp_name: string;
  user_name: string;
  user_phone: string;
  user_email: string;
  url: string;
  type: string;
  comp_location: string;
}

const Emails = ({
  comp_name,
  user_name,
  user_phone,
  user_email,
  url,
  type,
  comp_location
}: PlaidVerifyIdentityEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Text style={tertiary}>Sent by {user_name}</Text>

        <Text style={secondary}>{comp_name}</Text>
        <Text style={tertiary}>{comp_location}</Text>
        <Text style={tertiary}>{user_email}</Text>
        <Text style={tertiary}>{user_phone}</Text>

        <Section style={codeContainer}>
          <Text style={code}>{url}</Text>
        </Section>

        <Text style={paragraph}>
          Click on the link above to view  {type}
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #eee',
  borderRadius: '5px',
  boxShadow: '0 5px 10px rgba(20,50,70,.2)',
  marginTop: '20px',
  maxWidth: '400px',
  margin: '0 auto',
  padding: '68px 0 130px',
};

const tertiary = {
  color: '#444444',
  fontSize: '11px',
  fontWeight: 700,
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
  height: '16px',
  letterSpacing: '0',
  lineHeight: '16px',
  margin: '0 auto',
  marginBottom: '6px',
  textAlign: 'center' as const,
};

const secondary = {
  color: '#444444',
  margin: '0 auto',
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '24px',
  marginBottom: '6',
  marginTop: '0',
  textAlign: 'center' as const,
};

const paragraph = {
  color: '#444',
  fontSize: '15px',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
  letterSpacing: '0',
  lineHeight: '23px',
  padding: '0 40px',
  margin: '0',
  textAlign: 'center' as const,
};



const codeContainer = {
  background: 'rgba(0,0,0,.05)',
  borderRadius: '4px',
  margin: '16px auto 14px',
  verticalAlign: 'middle',
  width: '350px',
};

const code = {
  color: '#444444',
  display: 'inline-block',
  fontFamily: 'HelveticaNeue-Bold',
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: '12px',
  paddingBottom: '8px',
  paddingTop: '8px',
  margin: '0 auto',
  width: '100%',
  textAlign: 'center' as const,
};

export default Emails;
