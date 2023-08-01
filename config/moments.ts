export interface MomentsProps {
    date: string
    msg: string
    link: string
    linktarget: string
    linkdisplay: string
  }
  
  export const moments: MomentsProps[] = [
    {
      date: 'July 31, 2023',
      msg: '重写了 Moments 页面，现在效果应该更好一点。旧的页面归档了，不在主页展示。',
      link: '#',
      linktarget: '_self',
      linkdisplay: '这帖没提到啊喂(#`Д´)ﾉ',
    },
    {
      date: 'July 29, 2023',
      msg: '分享我的几个歌单，欢迎去听！',
      link: '/playlist',
      linktarget: '_blank',
      linkdisplay: '我的歌单 /playlist',
    },
    {
      date: 'July 27, 2023',
      msg: '推特要被马斯克玩坏了...开润',
      link: '#',
      linktarget: '_self',
      linkdisplay: '这帖没提到啊喂(#`Д´)ﾉ',
    },
  ]
