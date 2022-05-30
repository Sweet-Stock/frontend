import { useState } from 'react'
import Button from '../../components/button/Button'
import PlusBtn from '../../images/plusbtn.svg'
import ProviderPage from './dashboard_provider_pages/dashboard_providers_page/ProviderPage'
import ProviderFormPage from './dashboard_provider_pages/dashboard_provider_form_page/ProviderFormPage'

export default ({ grow }) => {
  const [page, setPage] = useState(true)

  switch (page) {
    case true:
      return <ProviderPage setPage={setPage} grow={grow} />
    case false:
      return <ProviderFormPage setPage={setPage} grow={grow} />

    default:
      break
  }
}
