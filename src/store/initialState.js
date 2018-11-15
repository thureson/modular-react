import App from '../components/app/App'

export default {
  app: {
    element: App,
    props: [['data', 'people']],
    children: []
  },
  data: {
    people: [
      { name: 'Tom' },
      { name: 'Upu' }
    ]
  }
}
