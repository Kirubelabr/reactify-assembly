import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

function SignInPage() {

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginForm] = Form.useForm();
  const intl = useIntl();

  const onLogin = async (values: any) => {
    console.log('USER DATA FOR LOGIN: ', values);
  }

  return <>

    <div className="flex w-full h-full" style={{ minHeight: '600px' }}>
      <div className="flex items-center justify-center flex-grow min-h-screen bg-white md:w-3/5">
        <div className="relative flex flex-col justify-center w-2/3 min-h-full md:w-2/3 lg:w-1/4">
          <div>
            <div className="flex justify-center">
              <span className="text-6xl font-semibold text-primary-500">
                Welcome
              </span>
            </div>
            <div className="text-xl text-center font-bold my-6">
              <FormattedMessage
                id="login.welcome"
                defaultMessage="Welcome back! Sign In"
              />
            </div>

            <Form form={loginForm} layout="vertical" onFinish={onLogin}>
              <div>
                <div className="mb-3">
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        type: 'email',
                        message: (
                          <FormattedMessage
                            id="register.email.invalid"
                            defaultMessage="Invalid email address"
                          />
                        ),
                      },
                      {
                        required: true,
                        message: (
                          <FormattedMessage
                            id="login.required.field"
                            defaultMessage="This field is required"
                          />
                        ),
                      },
                    ]}
                  >
                    <Input
                      type="email"
                      autoComplete="email"
                      placeholder={intl.formatMessage({
                        id: 'login.email',
                        defaultMessage: 'Email',
                      })}
                      size="large"
                      name="username"
                    />
                  </Form.Item>
                </div>

                <div className="mb-3">
                  <Form.Item
                    className="py-6"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: (
                          <FormattedMessage
                            id="login.required.field"
                            defaultMessage="This field is required"
                          />
                        ),
                      },
                    ]}
                  >
                    <Input
                      type="password"
                      placeholder={intl.formatMessage({
                        id: 'login.password',
                        defaultMessage: 'Password',
                      })}
                      size="large"
                      autoComplete="current-password"
                    />
                  </Form.Item>
                </div>

                {message ? (
                  <div className="bg-red-200 border-red-500 p-6 text-red-800 my-3 text-center rounded">
                    {message}
                  </div>
                ) : null}

                <div>
                  <Button
                    type='primary'
                    className="w-full bg-primary border-primary hover:bg-primary hover:border-primary focus:bg-primary"
                    htmlType="submit"
                    size="large"
                  >
                    <FormattedMessage id="login.btn.text" defaultMessage="Login" />
                  </Button>
                </div>

                <div className="my-1">
                  <Link
                    className="text-primary-500"
                    to={{ pathname: '/account/forgot' }}
                  >
                    <Button type="link" style={{ marginLeft: -15 }} className="text-primary hover:text-primary">
                      <FormattedMessage
                        id="login.forgot.password"
                        defaultMessage="Forgot password?"
                      />
                    </Button>
                  </Link>
                </div>

              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default SignInPage;
