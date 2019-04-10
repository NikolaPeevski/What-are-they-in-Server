# -*- mode: python -*-

block_cipher = None


a = Analysis(['identify_face_image.py'],
             pathex=['f:\\Users\\Akshat\\Desktop\\UW\\Spring 19\\509 SE\\Facenet-Real-time-face-recognition-using-deep-learning-Tensorflow-master\\Facenet-Real-time-face-recognition-using-deep-learning-Tensorflow'],
             binaries=[],
             datas=[],
             hiddenimports=[],
             hookspath=[],
             runtime_hooks=[],
             excludes=[],
             win_no_prefer_redirects=False,
             win_private_assemblies=False,
             cipher=block_cipher,
             noarchive=False)
pyz = PYZ(a.pure, a.zipped_data,
             cipher=block_cipher)
exe = EXE(pyz,
          a.scripts,
          a.binaries,
          a.zipfiles,
          a.datas,
          [],
          name='identify_face_image',
          debug=False,
          bootloader_ignore_signals=False,
          strip=False,
          upx=True,
          runtime_tmpdir=None,
          console=True )
