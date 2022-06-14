import React, { memo, useState } from 'react'

import { Form, Input, Button, Upload, message } from 'antd'

import {
  UserOutlined,
  LockOutlined,
  MobileOutlined,
  createFromIconfontCN,
  LoadingOutlined,
  PlusOutlined
} from '@ant-design/icons'

import { register } from '@/api/login'

import type { IDataResult } from '@/server/request/type'
import type { ImageType } from '@/api/login/types'
import type { UploadChangeParam } from 'antd/es/upload'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'

import { RegisterContainer } from './style'

import { IRegisterData } from '../../types'

// 引用阿里图标库
const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_3368951_4j4ajr0fxvl.js']
})

// 上传头像前触发的钩子
const beforeUpload = (file: RcFile) => {
  // 验证文件类型
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('文件类型错误!')
  }
  // 验证文件大小
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('图片大小不能大于2m!')
  }
  return isJpgOrPng && isLt2M
}

function Register() {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string>()
  const [form] = Form.useForm()

  // 上传图片
  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile<IDataResult<ImageType>>>
  ) => {
    // 上传中
    if (info.file.status === 'uploading') {
      // 开启loading
      return setLoading(true)
    }
    // 上传成功
    if (info.file.status === 'done') {
      // 关闭loading
      setLoading(false)
      // 获取图片url
      const url = info.file.response?.data.filesPath[0].url
      setImageUrl(url)
    }
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>上传头像</div>
    </div>
  )

  const onFinish = async (values: IRegisterData) => {
    await register({ ...values, avatar: imageUrl })
    setImageUrl('')
    form.resetFields()
    message.success('注册成功!')
  }

  return (
    <RegisterContainer>
      <Form
        form={form}
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <div className="form">
          <div className="info">
            <Form.Item
              name="username"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: '用户姓名不能为空'
                }
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="请输入用户姓名"
              />
            </Form.Item>
            <Form.Item
              name="mobile"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: '手机号不能为空'
                }
              ]}
            >
              <Input
                prefix={<MobileOutlined className="site-form-item-icon" />}
                placeholder="请输入手机号"
              />
            </Form.Item>
            <Form.Item
              name="email"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: '邮箱不能为空'
                },
                {
                  type: 'email',
                  message: '邮箱格式不正确'
                }
              ]}
            >
              <Input
                prefix={<IconFont type="icon-youxiang1" />}
                placeholder="请输入邮箱"
              />
            </Form.Item>
            <Form.Item
              name="password"
              hasFeedback
              rules={[{ required: true, message: '密码不能为空' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="请输入密码"
              />
            </Form.Item>
          </div>
          <div className="avatar">
            <Upload
              name="image"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="http://localhost:8888/api/upload/img"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    height: '100%',
                    borderRadius: 'unset'
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
        </div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            注册
          </Button>
        </Form.Item>
      </Form>
    </RegisterContainer>
  )
}

export default memo(Register)
