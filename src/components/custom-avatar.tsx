import { getNameInitials } from '@/utilities'
import { Avatar as AntdAvatar, AvatarProps } from 'antd'
import React from 'react'

type Props = AvatarProps & {
    name?: string
}
const CustomAvatar = ({ name, style, ...rest }: Props) => {
  
    return (
    <AntdAvatar
    alt={name}
    size='small'
    style={{
        backgroundColor: '#87d068',
        display: 'flex',
        alignItems: 'center',
        border: 'none',
        ...style
    }}
    {...rest}
    >
       {getNameInitials(name || '')} 
    </AntdAvatar>
  )
}

export default CustomAvatar