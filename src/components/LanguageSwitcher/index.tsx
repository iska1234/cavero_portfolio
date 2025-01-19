import { Globe } from 'lucide-react'
import React from 'react'
import LanguageSelectorSwitcher from '../LanguageSelectorSwitcher'

const LanguageSwitcher:React.FC = () => {

  return (
    <div className='flex items-center gap-2'>
        <Globe className='w-4 h-4 text-muted-foreground'/>
        <LanguageSelectorSwitcher/>
    </div>
  )
}

export default LanguageSwitcher