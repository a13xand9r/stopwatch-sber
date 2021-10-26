import { DeviceThemeProvider } from '@sberdevices/plasma-ui'
import { ReactNode } from 'react'
import { StoreProvider } from './StoreProvider'

export const Providers = ({ children }: { children: ReactNode }) => {
  return <StoreProvider>
    <DeviceThemeProvider>
      {children}
    </DeviceThemeProvider>
  </StoreProvider>
}
