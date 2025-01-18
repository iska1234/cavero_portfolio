import { Globe } from 'lucide-react'
import { useLocale } from 'next-intl'
import React from 'react'
import LanguageSelectorSwitcher from '../LanguageSelectorSwitcher'
import { Locale, routing } from '@/i18n/routing'

const LanguageSwitcher = () => {

    const locale = useLocale()
  return (
    <div className='flex items-center gap-2'>
        <Globe className='w-4 h-4 text-muted-foreground'/>
        <LanguageSelectorSwitcher defaultValue={locale as Locale}/>
    </div>
  )
}

export default LanguageSwitcher