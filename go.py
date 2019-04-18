import getpass
import shutil
import subprocess
import sys

direction = sys.argv[1]
names = sys.argv[2:]

password = getpass.getpass()

for name in names:
    print(name)

    archive_name = '{}.zip'.format(name)
    cipherfile_name = '{}.enc'.format(name)

    if direction == 'e':
        shutil.make_archive(name, 'zip', name)

    subprocess.check_call(['node', 'javascrypt.node.js', direction, archive_name, cipherfile_name, password])

    if direction == 'd':
        shutil.unpack_archive(archive_name, name)
